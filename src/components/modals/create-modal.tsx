import Modal from "@/UI/modal";
import { reactSelect } from "@/constants/const";
import useCreateModal from "@/hooks/useCreateModal";
import { useState } from "react";
import Select from "react-select";
interface ImageData {
  url: string;
  id: number;
}
const CreateModal = () => {
  const createmodal = useCreateModal();
  const [images, setImages] = useState<ImageData[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files!);
    const newImages = files.map((file, index) => ({
      url: URL.createObjectURL(file),
      id: index,
    }));
    setImages([...images, ...newImages]);
  };

  const body = (
    <>
      <div className="mb-8">
        <label htmlFor="" className="text-[#0F172A] font-bold  text-[14px] ">
          Product image<span className=" text-red-600">*</span>
          <p className="text-[#64748B] font-normal text-[12px] mb-4">
            Image format .jpg .jpeg .png and minimum size 300 x 300px
          </p>
        </label>

        <div className="flex  gap-4  flex-wrap">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.url}
              alt={`Image ${image.id}`}
              className="w-[130px] p-8 bg-[#F8FAFC] rounded-[12px] cursor-pointer h-[130px]"
            />
          ))}

          <label htmlFor="file-upload" className="custom-file-upload">
            <img
              className="p-8 bg-[#F8FAFC] rounded-[12px] cursor-pointer"
              src="/image/create-image.png"
              alt=""
            />
          </label>
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={handleImageChange}
            multiple
          />
        </div>
      </div>
      <div className="mb-8">
        <label htmlFor="" className="text-[#0F172A] font-bold  text-[14px]">
          Product name<span className=" text-red-600 ">*</span>
          <p className="text-[#64748B] font-normal text-[12px] mb-4">
            Include min. 40 characters to make it more interesting
          </p>
        </label>
        <input
          type="text"
          className="rounded-[12px] border-[#E2E8F0] border-[1px] w-full px-4 py-2 outline-none h-[56px]"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="" className="text-[#0F172A] font-bold  text-[14px]">
          Product descriptions
          <span className=" text-red-600 ">*</span>
          <p className="text-[#64748B] font-normal text-[12px] mb-4">
            Include min. 260 characters to make it easier for buyers to
            understand and find your product
          </p>
        </label>
        <textarea
          name=""
          id=""
          placeholder="Type something..."
          className="rounded-[12px] border-[#E2E8F0] border-[1px] w-full px-4 py-2 outline-none  h-[200px]"
        ></textarea>
      </div>
      <div className="flex justify-between gap-6">
        <div className="w-full">
          <label
            htmlFor=""
            className="text-[#0F172A] font-bold  text-[14px] mb-4"
          >
            Brand
          </label>
          <Select
            placeholder="8GB unified memory"
            //   onChange={(val) => selectCpartyNameType(val)}
            //   value={obj.name_type}/
            {...reactSelect}
            name="name_type"
            className="mt-4"
            options={[
              { name: "as", id: 1 },
              { id: 2, name: "wer" },
            ].map(({ id, name }) => ({
              label: name,
              value: id,
            }))}
          />
        </div>
        <div className="w-full">
          <label htmlFor="" className="text-[#0F172A] font-bold  text-[14px] ">
            Category
          </label>
          <Select
            className="mt-4"
            placeholder="8GB unified memory"
            //   onChange={(val) => selectCpartyNameType(val)}
            //   value={obj.name_type}/
            {...reactSelect}
            name="name_type"
            options={[
              { name: "as", id: 1 },
              { id: 2, name: "wer" },
            ].map(({ id, name }) => ({
              label: name,
              value: id,
            }))}
          />
        </div>
      </div>
    </>
  );

  return (
    <Modal
      body={body}
      header={<>Product Information</>}
      onClose={createmodal.onClose}
      isOpen={createmodal.isOpen}
      footer={<div className="py-2"></div>}
    />
  );
};

export default CreateModal;
