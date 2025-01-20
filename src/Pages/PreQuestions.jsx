import { Form, Input, Radio, DatePicker, Button } from "antd";
import React, { useState } from "react";
import moment from "moment";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useFetchBuySubscriptionPackageMutation } from "../Redux/Apis/subscriptionApis";
import toast from "react-hot-toast";

const PreQuestions = () => {
  if (!localStorage.getItem("token"))
    return <Navigate to={`/sign-in`}></Navigate>;
  const { id } = useParams();
  const params = new URLSearchParams(window.location.search);
  const amount = params.get("amount");
  const plan_type = params.get("plan_type");
  const payment_status = params.get("payment_status");
  const [BuySubscription] = useFetchBuySubscriptionPackageMutation();
  const [value, setValue] = useState(1);
  const navigate = useNavigate();

  const onFinish = (values) => {
    const formattedValues = {
      ...values,
      date_of_birth: values.date_of_birth
        ? values.date_of_birth.format("YYYY-MM-DD")
        : null,
      departureArrival: values.departureArrival
        ? values.departureArrival.format("YYYY-MM-DD")
        : null,
      datesOfTravel: values.datesOfTravel
        ? values.datesOfTravel.format("YYYY-MM-DD")
        : null,
      plan_type: plan_type,
      amount: Number(amount),
      plan_id: id,
      payment_status: payment_status,
    };
    BuySubscription(formattedValues)
      .unwrap()
      .then((res) => {
        navigate("/");
        toast.dismiss();
        toast.success(res?.message || "Request sent successfully");
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(err?.data?.message || "Something went wrong");
      });
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="bg-white container mx-auto p-8 rounded-lg shadow-lg mt-10">
      <Form
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout="vertical"
        onFinish={onFinish}
        // initialValues={{
        //   name: "John Doe",
        //   date_of_birth: moment("1980-01-01"),
        //   place_of_birth: "New York",
        //   license_number: "D1234567",
        //   passport_number: "P987654321",
        //   email: "johndoe@example.com",
        //   phone_number: "+1234567890",
        //   profession: "Software Engineer",
        //   region: "North America",
        //   haveChildren: "Yes",
        //   havePets: "No",
        //   haveVehicle: "Yes",
        //   willingVehicle: "Yes",
        //   ownerOfProperty: "Yes",
        //   ableApproveForm: "Yes",
        //   propertyInsured: "Yes",
        //   utilitiesUptoDate: "Yes",
        //   aboutSwap: "Swap details go here.",
        //   departureArrival: moment("2024-12-01"),
        //   datesOfTravel: moment("2024-12-10"),
        //   endDestination: "City B",
        //   endState: "State B",
        //   endCounty: "County B",
        //   endCountry: "Country B",
        //   purposeOfTravel: "Business",
        //   religion: "Islam",
        //   planStartDate: moment("2024-12-10"),
        //   planEndDate: moment("2024-12-10"),
        // }}
      >
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please enter your full name." }]}
        >
          <Input placeholder="Enter your full name" />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="date_of_birth"
          rules={[
            { required: true, message: "Please select your date of birth." },
          ]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Place of Birth"
          name="place_of_birth"
          rules={[
            { required: true, message: "Please enter your place of birth." },
          ]}
        >
          <Input placeholder="Enter your place of birth" />
        </Form.Item>

        <Form.Item
          label="License Number Or ID number"
          name="license_number"
          rules={[
            {
              required: true,
              message: "Please enter your license number. Or ID number",
            },
          ]}
        >
          <Input placeholder="Enter your license number" />
        </Form.Item>

        <Form.Item label="Passport Number" name="passport_number">
          <Input placeholder="Enter your passport number" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email address." },
          ]}
        >
          <Input type="email" placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone_number"
          rules={[
            { required: true, message: "Please enter your phone number." },
          ]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>

        <Form.Item
          label="Profession"
          name="profession"
          rules={[{ required: true, message: "Please enter your profession." }]}
        >
          <Input placeholder="Enter your profession" />
        </Form.Item>

        <Form.Item
          label="Region"
          name="region"
          rules={[{ required: true, message: "Please enter your region." }]}
        >
          <Input placeholder="Enter your region" />
        </Form.Item>

        <Form.Item label="Religion (optional)" name="religion">
          <Input placeholder="Enter your religion" />
        </Form.Item>

        <Form.Item label="Travel Start Destination" name="startDestination">
          <Input placeholder="Enter your travel start destination" />
        </Form.Item>

        <Form.Item label="Travel Start State" name="startState">
          <Input placeholder="Enter your start state" />
        </Form.Item>

        <Form.Item label="Travel Start County" name="travelStartCounty">
          <Input placeholder="Enter your start county" />
        </Form.Item>

        <Form.Item label="Travel Start Country" name="travelStartCountry">
          <Input placeholder="Enter your start country" />
        </Form.Item>

        <Form.Item label="Travel End Destination" name="endDestination">
          <Input placeholder="Enter your travel end destination" />
        </Form.Item>

        <Form.Item label="Travel End State" name="endState">
          <Input placeholder="Enter your end state" />
        </Form.Item>

        <Form.Item label="Travel End County" name="endCounty">
          <Input placeholder="Enter your end county" />
        </Form.Item>

        <Form.Item label="Travel End Country" name="endCountry">
          <Input placeholder="Enter your end country" />
        </Form.Item>

        <Form.Item label="Purpose of Travel" name="purposeOfTravel">
          <Input placeholder="Enter the purpose of your travel" />
        </Form.Item>

        <Form.Item label="Departure Arrival Date" name="departureArrival">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Dates of Travel" name="datesOfTravel">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Do you have children?"
          name="haveChildren"
          rules={[
            { required: true, message: "Please select if you have children." },
          ]}
        >
          <Radio.Group onChange={onChange}>
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Do you have pets?"
          name="havePets"
          rules={[
            { required: true, message: "Please select if you have pets." },
          ]}
        >
          <Radio.Group onChange={onChange}>
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Do you own a vehicle?"
          name="haveVehicle"
          rules={[
            { required: true, message: "Please select if you own a vehicle." },
          ]}
        >
          <Radio.Group onChange={onChange}>
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Are you willing to swap your vehicle?"
          name="willingVehicle"
          rules={[
            {
              required: true,
              message: "Please select if you are willing to swap your vehicle.",
            },
          ]}
        >
          <Radio.Group onChange={onChange}>
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Do you own the property?"
          name="ownerOfProperty"
          rules={[
            {
              required: true,
              message: "Please select if you own the property.",
            },
          ]}
        >
          <Radio.Group onChange={onChange}>
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Is the property insured?"
          name="propertyInsured"
          rules={[
            {
              required: true,
              message: "Please select if the property is insured.",
            },
          ]}
        >
          <Radio.Group onChange={onChange}>
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Are utilities up-to-date?"
          name="utilitiesUptoDate"
          rules={[
            {
              required: true,
              message: "Please select if utilities are up-to-date.",
            },
          ]}
        >
          <Radio.Group onChange={onChange}>
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Are you able to approve the form?"
          name="ableApproveForm"
          rules={[
            {
              required: true,
              message: "Please select if you are able to approve the form.",
            },
          ]}
        >
          <Radio.Group onChange={onChange}>
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="About Swap"
          name="aboutSwap"
          rules={[
            {
              required: true,
              message: "Please provide details about the swap.",
            },
          ]}
        >
          <Input.TextArea
            style={{
              resize: "none",
            }}
            rows={3}
            placeholder="Enter details about the swap"
          />
        </Form.Item>

        {/* <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <Form.Item
                        label="Plan Start Date"
                        name="planStartDate"
                        rules={[{ required: true, message: 'Please select the plan start date.' }]}
                    >
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        label="Plan End Date"
                        name="planEndDate"
                        rules={[{ required: true, message: 'Please select the plan end date.' }]}
                    >
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                </div> */}

        <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center mt-8">
          <Button type="primary" htmlType="submit" className="px-10 py-3">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PreQuestions;

// import { Form, Input, Radio, DatePicker, Button } from 'antd';
// import React, { useState } from 'react';
// import moment from 'moment';

// const PreQuestions = () => {
//     const [value, setValue] = useState(1);
//     const onFinish = (values) => {
//     };
//     const onChange = (e) => {
//         setValue(e.target.value);
//     };

//     return (
//         <div className="bg-gray-100 container mx-auto p-6 rounded-lg shadow-lg mt-10">
//             <p className="text-4xl font-bold text-center text-blue-600 mb-8">Pre-Approval Questions</p>
//             <Form
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//                 layout="vertical"
//                 onFinish={onFinish}
//             >
//                 <Form.Item
//                     label="Full Name"
//                     name="name"
//                     rules={[{ required: true, message: 'This field is required' }]}
//                 >
//                     <Input placeholder="Enter your full name" />
//                 </Form.Item>

//                 <Form.Item
//                     label="Date of Birth"
//                     name="date_of_birth"
//                     rules={[{ required: true, message: 'This field is required' }]}
//                 >
//                     <DatePicker style={{ width: '100%' }} defaultPickerValue={moment('1980-01-01')} />
//                 </Form.Item>

//                 <Form.Item
//                     label="Place of Birth"
//                     name="place_of_birth"
//                     rules={[{ required: true, message: 'This field is required' }]}
//                 >
//                     <Input placeholder="Enter your place of birth" />
//                 </Form.Item>

//                 <Form.Item
//                     label="License Number"
//                     name="license_number"
//                     rules={[{ required: true, message: 'This field is required' }]}
//                 >
//                     <Input placeholder="Enter your license number" />
//                 </Form.Item>

//                 <Form.Item
//                     label="Passport Number"
//                     name="passport_number"
//                     rules={[{ required: true, message: 'This field is required' }]}
//                 >
//                     <Input placeholder="Enter your passport number" />
//                 </Form.Item>

//                 <div className='row-span-4 grid sm:grid-cols-2 md:grid-cols-1'>
//                     <Form.Item
//                         label="Do you have children?"
//                         name="haveChildren"
//                         rules={[{ required: true, message: 'This field is required' }]}
//                     >
//                         <Radio.Group onChange={onChange}>
//                             <Radio value="Yes">Yes</Radio>
//                             <Radio value="No">No</Radio>
//                         </Radio.Group>
//                     </Form.Item>

//                     <Form.Item
//                         label="Do you have pets?"
//                         name="havePets"
//                         rules={[{ required: true, message: 'This field is required' }]}
//                     >
//                         <Radio.Group onChange={onChange}>
//                             <Radio value="Yes">Yes</Radio>
//                             <Radio value="No">No</Radio>
//                         </Radio.Group>
//                     </Form.Item>

//                     <Form.Item
//                         label="Do you own a vehicle?"
//                         name="haveVehicle"
//                         rules={[{ required: true, message: 'This field is required' }]}
//                     >
//                         <Radio.Group onChange={onChange}>
//                             <Radio value="Yes">Yes</Radio>
//                             <Radio value="No">No</Radio>
//                         </Radio.Group>
//                     </Form.Item>

//                     <Form.Item
//                         label="Are you willing to swap your vehicle?"
//                         name="willingVehicle"
//                         rules={[{ required: true, message: 'This field is required' }]}
//                     >
//                         <Radio.Group onChange={onChange}>
//                             <Radio value="Yes">Yes</Radio>
//                             <Radio value="No">No</Radio>
//                         </Radio.Group>
//                     </Form.Item>

//                     <Form.Item
//                         label="Do you own the property?"
//                         name="ownerOfProperty"
//                         rules={[{ required: true, message: 'This field is required' }]}
//                     >
//                         <Radio.Group onChange={onChange}>
//                             <Radio value="Yes">Yes</Radio>
//                             <Radio value="No">No</Radio>
//                         </Radio.Group>
//                     </Form.Item>
//                 </div>
//                 <Form.Item
//                     label="Email"
//                     name="email"
//                     rules={[{ required: true, message: 'This field is required' }]}
//                 >
//                     <Input placeholder="Enter your email" />
//                 </Form.Item>

//                 <Form.Item
//                     label="Phone Number"
//                     name="phone_number"
//                     rules={[{ required: true, message: 'This field is required' }]}
//                 >
//                     <Input placeholder="Enter your phone number" />
//                 </Form.Item>

//                 <Form.Item
//                     label="Profession"
//                     name="profession"
//                     rules={[{ required: true, message: 'This field is required' }]}
//                 >
//                     <Input placeholder="Enter your profession" />
//                 </Form.Item>

//                 <Form.Item
//                     label="Travel Start Destination"
//                     name="startDestination"
//                     rules={[{ required: true, message: 'This field is required' }]}
//                 >
//                     <Input placeholder="Enter your travel start destination" />
//                 </Form.Item>

//                 <Form.Item
//                     label="Travel End Destination"
//                     name="endDestination"
//                     rules={[{ required: true, message: 'This field is required' }]}
//                 >
//                     <Input placeholder="Enter your travel end destination" />
//                 </Form.Item>

//                 <Form.Item
//                     label="Purpose of Travel"
//                     name="purposeOfTravel"
//                     rules={[{ required: true, message: 'This field is required' }]}
//                 >
//                     <Input placeholder="Enter your purpose of travel" />
//                 </Form.Item>

//                 <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center mt-8">
//                     <Button type="primary" htmlType="submit" className="px-10 py-3">
//                         Submit
//                     </Button>
//                 </div>
//             </Form>
//         </div>
//     );
// };

// export default PreQuestions;
