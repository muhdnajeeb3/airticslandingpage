import axios from "axios";
import { parsePhoneNumber } from "libphonenumber-js";
import React, { useEffect, useState } from "react";
import { CountryNumberLimit } from "./CountryNum";
import PhoneInput from "react-phone-number-input";

const PopupForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const initialFormData = {
    FirstName: "",
    Course: "",
    Email: "",
    YearsOfExp: "",
    Industry: "",
    Country: "",
    MiddleName: "",
    LastName: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [courseOptions, setCourseOptions] = useState([]);
  const [phonevalidate, setPhonevalidate] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      // Disable scrolling in the background when the popup is displayed
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
      // Enable scrolling when the popup is hidden
    }

    // Clean up the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSubmitted]);
  useEffect(() => {
    axios
      .get("https://services.airtics.org/Course/GetAllActiveCourses")
      .then((response) => {
        setCourseOptions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Append the comment to the formData
    let updatedFormData = { ...formData };
    // Make API request using Axios
    axios
      .post(
        "https://services.airtics.org/User/InsertLeadsFromWebsiteAPI",
        updatedFormData
      )
      .then((response) => {
        if (response.status === 200) {
          alert("success");
          setIsSubmitted(true);
        } else {
          alert("error");
        }
        setFormData(initialFormData);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };
  useEffect(() => {
    detectCountry();
  }, []);

  const detectCountry = () => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          Country: data.country_name,
        }));
      })
      .catch((error) => {
        console.error("Error detecting country:", error);
      });
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleContactChange = (value) => {
    try {
      // Parse the phone number to get country code
      const phoneNumber = parsePhoneNumber(value);
      if (phoneNumber) {
        const countryCode = phoneNumber.country;
        const countryData = CountryNumberLimit.find(
          (country) => countryCode === country.code
        );

        if (countryData) {
          const validLengths = Array.isArray(countryData.phoneLength)
            ? countryData.phoneLength
            : [countryData.phoneLength];
          const expectedLength =
            value.length - (phoneNumber.countryCallingCode.length + 1); // Adding 1 for the '+' sign

          if (validLengths.includes(expectedLength)) {
            setPhonevalidate(false);
            setFormData({
              ...formData,
              ContactNo: value,
            });
          } else {
            setPhonevalidate(true);
          }
        } else {
          console.log(`Country code ${countryCode} not found in the JSON data`);
        }
      } else {
        console.log(
          "Invalid phone number format. Make sure it starts with a valid country code."
        );
      }
    } catch (error) {
      console.log("Error parsing phone number:", error.message);
    }
  };
  return (
    <div
      className={`fixed w-full h-[620px] bg-transparent flex items-center justify-center ${
        isSubmitted ? "hidden" : ""
      }`}
    >
      <div className="w-[300px] h-[570px] bg-[#FFC107] flex items-center justify-center flex-col rounded-md">
        <div className="my-3">
          <span className="text-3xl">Enroll Now</span>
        </div>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            className="max-w-[230px] h-[37px] p-2"
            placeholder="Name"
            name="FirstName"
            id="name"
            value={formData.FirstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            className="max-w-[230px] h-[37px] p-2"
            placeholder="Email"
            name="Email"
            id="email"
            value={formData.Email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            className="max-w-[230px] h-[37px] p-2"
            placeholder="Highest Qualification"
            name="HighestQualification"
            id="HighestQualification"
            value={formData.HighestQualification}
            onChange={handleInputChange}
            required
          />
          <div className="bg-white pl-2 max-w-[230px]">
            <PhoneInput
              placeholder="Phone number"
              id="contact"
              name="ContactNo"
              className="h-[37px]"
              defaultCountry="AE"
              required
              value={formData.ContactNo}
              onChange={handleContactChange}
            />
          </div>
          <label
            style={{
              color: "red",
              fontSize: "12px",
              display: !phonevalidate && "none",
              fontFamily: "metropolis",
            }}
          >
            Please enter a valid mobile number
          </label>
          <select
            id="course"
            name="Course"
            className="max-w-[230px] h-[37px]"
            value={formData.Course}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a course</option>
            {courseOptions.map((course) => (
              <option key={course.courseId} value={course.courseId}>
                {course.courseName}
              </option>
            ))}
          </select>
          <select
            id="industry"
            name="Industry"
            className="max-w-[230px] h-[37px]"
            value={formData.Industry}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an industry</option>
            <option value="TBSFI">TBSFI</option>
            <option value="Ecommerce">Ecommerce</option>
            <option value="Education">Education</option>
            <option value="IT & Technology">IT & Technology</option>
            <option value="Healthcare & Biotechnology">
              Healthcare & Biotechnology
            </option>
            <option value="Agriculture & Food Industry">
              Agriculture & Food Industry
            </option>
            <option value="Logistics & Supply Chain Management">
              Logistics & Supply Chain Management
            </option>
            <option value="Manufacturing & Automobile">
              Manufacturing & Automobile
            </option>
            <option value="Construction, Civil & Real Estate">
              Construction, Civil & Real Estate
            </option>
            <option value="Hospitality & Entertainment">
              Hospitality & Entertainment
            </option>
            <option value="Oil, Gas & Energy">Oil, Gas & Energy</option>
            <option value="Others">Others</option>
          </select>
          <select
            id="experience"
            name="YearsOfExp"
            value={formData.YearsOfExp}
            className="max-w-[230px] h-[37px]"
            onChange={handleInputChange}
            required
          >
            <option value="">Select experience</option>
            <option value="Undergraduate Student">Undergraduate Student</option>
            <option value="0 Years">0 Years</option>
            <option value="1-3 Years">1-3 Years</option>
            <option value="3-5 Years">3-5 Years</option>
            <option value="5-8 Years">5-8 Years</option>
            <option value="8-12 Years">8-12 Years</option>
            <option value="12-15 Years">12-15 Years</option>
            <option value="15years & above">15years & above</option>
          </select>
          <div>
            <button
              variant="warning"
              type="submit"
              className="bg-[#383B41] rounded-md text-white mb-4 w-[150px] h-[48px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;