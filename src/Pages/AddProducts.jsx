import { Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useFetchCategorySubCategoryQuery } from "../Redux/Apis/categoryApis";
import { useAddProductsMutation } from "../Redux/Apis/productsApis";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useFetchMyPlnQuery } from "../Redux/Apis/subscriptionApis";

const AddProducts = () => {
  const { data: myPlan } = useFetchMyPlnQuery();
  console.log(myPlan);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [image, setImage] = useState([]);
  const { data: subCategories } = useFetchCategorySubCategoryQuery();
  const [selectedCategory, setSelectedCategory] = useState({});
  const [category, setCategory] = useState([]);
  const [addProduct] = useAddProductsMutation();
  useEffect(() => {
    const formateData = groupByCategory(subCategories?.data || []);
    setCategory(formateData);
  }, [subCategories?.data]);
  const onFinish = (value) => {
    if (
      Number(value?.productValue) >
      Number(myPlan?.data?.plan_id?.productPriceLimit)
    ) {
      return toast.error(
        `you can't add product that worth more then $${myPlan?.data?.plan_id?.productPriceLimit}`
      );
    }
    if (image.length < 1) {
      return toast.error("Please select product image");
    }
    const formData = new FormData();
    Object.keys(value)?.map((key) => {
      formData.append(key, value[key]);
    });
    image.map((item) => {
      formData.append("product_img", item);
    });
    formData.forEach((e) => {
      //console.log(e)
    });
    addProduct(formData)
      .unwrap()
      .then((res) => {
        form.resetFields();
        toast.success(res?.data?.message || "Product Added Successfully");
        navigate("/swap");
      })
      .catch((err) => {
        toast.error(err?.data?.message || "Something went wrong");
      });
    // product_img addProduct
  };
  return (
    <div className="container mx-auto mt-10 bg-white p-4">
      <div className="flex justify-between items-center gap-2">
        <p className="text-2xl font-semibold text-[#4E4E4E]">Add Product</p>
        {/* <Input className='w-44' prefix={<IoSearch />} placeholder='search here ....' /> */}
      </div>
      <Form onFinish={onFinish} layout="vertical" form={form}>
        <div className="flex justify-start items-center gap-2 mt-6 flex-wrap">
          {/* <Form.Item
                        name={`location`}
                        rules={[
                            {
                                message: 'this field is required',
                                required: true
                            }
                        ]}
                    >
                        <Select className='w-44' placeholder='set a location' options={[
                            { label: 'category', value: 'category' },
                            { label: 'category', value: 'category' },
                            { label: 'category', value: 'category' },
                        ]} />
                    </Form.Item> */}
        </div>
        <div className="md:grid flex flex-col justify-start md:justify-center items-start md:items-center grid-cols-2 gap-4 md:gap-6">
          <Form.Item
            className="w-full"
            name={`category`}
            label="Product Category"
            rules={[
              {
                message: "this field is required",
                required: true,
              },
            ]}
          >
            <Select
              onChange={(value) => {
                const filterCategory = category.filter(
                  (item) => item?._id === value
                );
                setSelectedCategory(filterCategory[0] || {});
              }}
              className="min-w-56"
              placeholder="choose a category"
              options={
                category?.map((item) => ({
                  label: item?.name,
                  value: item?._id,
                })) || []
              }
            />
          </Form.Item>
          <Form.Item
            name={`subCategory`}
            className="w-full"
            label="Product Sub Category"
            rules={[
              {
                message: "this field is required",
                required: true,
              },
            ]}
          >
            <Select
              className="min-w-56"
              placeholder="choose a sub category"
              options={
                selectedCategory?.subcategories?.map((item) => ({
                  label: item?.name,
                  value: item?._id,
                })) || []
              }
            />
          </Form.Item>
          <Form.Item
            className="w-full"
            name={`title`}
            label="Product Title"
            rules={[
              {
                message: "this field is required",
                required: true,
              },
            ]}
          >
            <Input className="" placeholder="Product title" />
          </Form.Item>
          <Form.Item
            className="w-full"
            name={`condition`}
            label="Product Condition"
            rules={[
              {
                message: "this field is required",
                required: true,
              },
            ]}
          >
            <Input className="" placeholder="Product Condition" />
          </Form.Item>
          <Form.Item
            className="col-span-2"
            name={`address`}
            label={"Location"}
            rules={[
              {
                message: "this field is required",
                required: true,
              },
            ]}
          >
            <Input className="" placeholder="Location" />
          </Form.Item>
          <Form.Item
            className="col-span-2 w-full"
            name={`productValue`}
            label="Product Value"
            type="number"
            rules={[
              {
                message: "this field is required",
                required: true,
              },
            ]}
          >
            <Input className="" type="number" placeholder="Product Value" />
          </Form.Item>
          <Form.Item
            className="col-span-2 w-full"
            name={`description`}
            label="Product Description"
            rules={[
              {
                message: "this field is required",
                required: true,
              },
            ]}
          >
            <TextArea
              style={{
                height: 200,
                resize: "none",
              }}
              className=""
              placeholder="Product Description"
            />
          </Form.Item>
        </div>
        <p>Add Product Image</p>
        <div className="flex justify-start items-center gap-2 p-2 border ">
          {image.map((item, i) => {
            return (
              <div className="w-[100px] h-[100px] flex-col flex justify-center items-center relative">
                <button
                  type="button"
                  onClick={() => {
                    const newImages = image.filter(
                      (item, index) => index !== i
                    );
                    setImage(newImages);
                    // set
                  }}
                  className="text-2xl text-red-600 absolute top-1 right-1 bg-white rounded-full"
                >
                  <RxCross2 />
                </button>
                <img
                  src={URL.createObjectURL(item)}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
            );
          })}
          <label
            htmlFor="image"
            className="w-[100px] h-[100px] flex-col flex justify-center items-center text-blue-500 border border-blue-500"
          >
            <LuImagePlus className="text-2xl" />
            <p>Add image</p>
            <Input
              onChange={(e) => {
                setImage([...image, ...e.target.files]);
              }}
              id="image"
              type="file"
              accept="image/*"
              multiple={true}
              style={{
                display: "none",
              }}
            />
          </label>
        </div>
        <div className="flex justify-center items-center mt-6">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md">
            Publish
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddProducts;

const groupByCategory = (data) => {
  const categoryMap = {};

  data.forEach((item) => {
    const categoryId = item.category._id;
    const categoryName = item.category.name;

    if (!categoryMap[categoryId]) {
      categoryMap[categoryId] = {
        name: categoryName,
        _id: categoryId,
        subcategories: [],
      };
    }

    categoryMap[categoryId].subcategories.push({
      name: item.name,
      _id: item._id,
    });
  });

  return Object.values(categoryMap);
};
