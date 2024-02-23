/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Layout from "../layout/layout";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { IProduct } from "@/types/type";
import axios from "axios";

const columns: GridColDef[] = [
  { field: "title", headerName: "Product Name", width: 340 },
  {
    field: `brand`,
    headerName: "Brand",
    width: 124,
    valueGetter: (params) => params.row.brand.title,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 124,
    valueFormatter: (params) => {
      const stock = params.value.toString(); // Qiymatni stringga o'girish
      const formattedStock = stock.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Vergullarni qo'yish
      return formattedStock;
    },
  },
  {
    field: "sales",
    headerName: "Sales",
    width: 124,
    valueFormatter: (params) => {
      const stock = params.value.toString(); // Qiymatni stringga o'girish
      const formattedStock = stock.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Vergullarni qo'yish
      return formattedStock;
    },
  },
  {
    field: "productPricings",
    headerName: "Price",
    width: 140,
    valueGetter: (params) => `$${params.row.productPricings.price}`,
  },
  {
    field: "status",
    headerName: "Status",
    width: 97,
    renderCell: (params) => (
      <label className="switch">
        <input
          type="checkbox"
          checked={params.value}
          onChange={(event) => {
            // Checkbox qiymatini o'zgartirish
            const newValue = !params.value;
            // Qiymatni o'zgartirishni o'zgartirilgan qiymat bilan o'zgartiramiz
            params.setValue(newValue);
          }}
        />
        <span className="slider round"></span>
      </label>
    ),
  },
];

const Product = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  // const [checked, setChecked] = useState(true);

  // const handleChange = () => {
  //   setChecked(!checked);
  // };

  const getProductList = async () => {
    try {
      const { data } = await axios.get(
        `https://test.olimjohn.uz/api/product-list/`
      );
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  // const CustomCheckbox = React.forwardRef(
  //   ({ checked }: { checked: boolean }, ref) => (
  //     <span
  //       style={{
  //         cursor: "pointer",
  //         display: "inline-block",
  //         width: "20px",
  //         height: "20px",
  //         position: "relative",
  //         backgroundColor: checked ? "#2563EB" : "transparent",
  //         border: checked ? "1px solid #2563EB" : "1px solid #E2E8F0",
  //         borderRadius: "4px",
  //       }}
  //     >
  //       <input
  //         type="checkbox"
  //         style={{
  //           opacity: 0,
  //           width: "100%",
  //           height: "100%",
  //           position: "absolute",
  //           top: 0,
  //           left: 0,
  //           cursor: "pointer",
  //         }}
  //         checked={checked}
  //         // onChange={handleChange}
  //       />
  //       {checked ? (
  //         <span
  //           style={{
  //             position: "absolute",
  //             top: "50%",
  //             left: "50%",
  //             transform: "translate(-50%, -50%)",
  //             color: "white",
  //             fontWeight: "bold",
  //           }}
  //         >
  //           <svg
  //             width="10.341431"
  //             height="7.559647"
  //             viewBox="0 0 10.3414 7.55965"
  //             fill="none"
  //             xmlns="http://www.w3.org/2000/svg"
  //             // xmlns:xlink="http://www.w3.org/1999/xlink"
  //           >
  //             <desc>Created with Pixso.</desc>
  //             <defs />
  //             <path
  //               id="Vector"
  //               d="M1.00403 3.78187L3.78186 6.55965L9.3374 1.00409"
  //               stroke="#FFFFFF"
  //               stroke-opacity="1.000000"
  //               stroke-width="2.000000"
  //               stroke-linejoin="round"
  //               stroke-linecap="round"
  //             />
  //           </svg>
  //         </span>
  //       ) : null}
  //     </span>
  //   )
  // );
  return (
    <Layout>
      <Header
        label="Product"
        filter={true}
        desc="Detailed information about your products"
      />
      <div className="p-8">
        <div
          style={{
            width: "100%",
            fontWeight: "600",
            fontSize: "16px",
            height: "100%",
            fontFamily: "Inter ,  sans-serif ",
          }}
          className="bg-white rounded-[16px]"
        >
          <DataGrid
            rows={products}
            columns={columns.map((column) => ({
              ...column,
              headerClassName: "custom-header",
            }))}
            // components={{
            //   BaseCheckbox: CustomCheckbox,
            // }}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            style={{
              fontFamily: "Inter",
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection // Checkbox ustunlarini ko'rsatish
            getCellClassName={(params) =>
              params.field !== "title"
                ? "font-bold text-[16px] "
                : " font-bold text-[16px]"
            }
          />
        </div>
      </div>
    </Layout>
  );
};

export default Product;
