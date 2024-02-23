/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Layout from "../layout/layout";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { IProduct } from "@/types/type";
import axios from "axios";
import { Snackbar } from "@mui/material";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Product Name",
      width: 340,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={params.row.image}
            alt=""
            onError={(e) => {
              e.target.src =
                "https://www.svgindianmarket.com/images/thumbs/default-image_510.png";
              // some replacement image
            }}
            // alt="Product"
            style={{
              width: 40,
              height: 40,
              marginRight: 16,
              backgroundColor: "#F8FAFC",
              borderRadius: "8px",
              border: "0px",
              padding: "10px",
            }}
          />
          <span>{params.value}</span>
        </div>
      ),
    },
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
    {
      field: `guid`,
      headerName: "",
      width: 100,
      renderCell: (params) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => handleDelete(params.value)}
        >
          delete
        </div>
      ),
    },
  ];
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleDelete = async (id: { id: number }) => {
    try {
      setLoading(true);
      await axios.delete(`https://test.olimjohn.uz/api/product-delete/${id}`);
      setLoading(false);
    } catch (error) {
      console.log(error);

      <Snackbar
        // open={open}
        autoHideDuration={6000}
        // onClose={handleClose}
        message="Note archived"
        // action={action}
      />;
    }
  };
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

  return (
    <Layout>
      <Header
        label="Product"
        filter={true}
        desc="Detailed information about your products"
      />
      {loading && <>Loading....</>}
      <div className="p-8">
        <div
          style={{
            width: "100%",
            fontWeight: "600",
            fontSize: "16px",
            height: "100%",
            fontFamily: "Inter,sans-serif",
          }}
          className="bg-white rounded-[16px]"
        >
          <DataGrid
            rows={products}
            columns={columns.map((column) => ({
              ...column,
              headerClassName: "custom-header",
              // field: "custom-field",
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
                ? "font-bold text-[16px]"
                : " font-bold text-[16px]"
            }
          />
        </div>
      </div>
    </Layout>
  );
};

export default Product;
