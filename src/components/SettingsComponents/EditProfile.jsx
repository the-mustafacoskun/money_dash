import React from "react";
import profilePhoto from "../../assets/profilePhoto.jpg";
import { useForm } from "react-hook-form";
import { Pen } from "lucide-react";

export function EditProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", // Hataları anlık görmek için
    //dinamik olarak gelecek default değerler
    defaultValues: {
      fullName: "Mustafa Coşkun",
      userName: "mustafa_dev",
      email: "mustafa@example.com",
      password: "",
      dateOfBirth: "1991-03-21",
      presentAddress: "Malatya, Türkiye",
      permanentAddress: "Malatya, Türkiye",
      city: "Malatya",
      postalCode: "44000",
      country: "Türkiye",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Verileri:", data);
    
  };

  // Tekrarlayan input stilini bir değişkenle yönetelim
  const inputClass = (fieldName) => `
    rounded-2xl border h-12 px-5 outline-none transition-all
    ${errors[fieldName] ? "border-red-500 focus:border-red-500" : "border-[#DFEAF2] focus:border-[#1814F3]"}
    text-[#718EBF] text-sm
  `;

  return (
    <div className="p-5 sm:p-6 md:p-7.5 w-full">
      

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row mx-auto justify-start items-start gap-8">
          {/* Profil Fotoğrafı Bölümü */}
          <div className="relative shrink-0 mx-auto md:mx-0">
            <img
              src={profilePhoto}
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-100"
              alt="Profile"
            />
            <button className="w-8 h-8 absolute bottom-1 right-1 bg-[#1814F3] p-2 rounded-full cursor-pointer hover:scale-110 transition-transform flex items-center justify-center">
                <Pen className="text-white text-center " fill="white" />
            </button>
          </div>

          {/* Form Grid Alanı */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 w-full">
            
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[#343C6A] text-sm font-medium">Your Name</label>
              <input
                {...register("fullName", { required: "İsim zorunludur", minLength: { value: 3, message: "En az 3 karakter" } })}
                type="text"
                className={inputClass("fullName")}
              />
              {errors.fullName && <span className="text-xs text-red-500 ml-2">{errors.fullName.message}</span>}
            </div>

            {/* User Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[#343C6A] text-sm font-medium">User Name</label>
              <input
                {...register("userName", { required: "Kullanıcı adı zorunludur" })}
                type="text"
                className={inputClass("userName")}
              />
              {errors.userName && <span className="text-xs text-red-500 ml-2">{errors.userName.message}</span>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-[#343C6A] text-sm font-medium">Email</label>
              <input
                {...register("email", { 
                  required: "Email zorunludur",
                  pattern: { value: /^\S+@\S+$/i, message: "Geçerli bir email giriniz" }
                })}
                type="email"
                className={inputClass("email")}
              />
              {errors.email && <span className="text-xs text-red-500 ml-2">{errors.email.message}</span>}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-[#343C6A] text-sm font-medium">Password</label>
              <input
                {...register("password", { required: "Şifre zorunludur", minLength: { value: 6, message: "En az 6 karakter" } })}
                type="password"
                className={inputClass("password")}
                placeholder="******"
              />
              {errors.password && <span className="text-xs text-red-500 ml-2">{errors.password.message}</span>}
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col gap-2">
              <label className="text-[#343C6A] text-sm font-medium">Date of Birth</label>
              <input
                {...register("dateOfBirth", { required: "Tarih zorunludur" })}
                type="date"
                className={inputClass("dateOfBirth")}
              />
              {errors.dateOfBirth && <span className="text-xs text-red-500 ml-2">{errors.dateOfBirth.message}</span>}
            </div>

            {/* Present Address */}
            <div className="flex flex-col gap-2">
              <label className="text-[#343C6A] text-sm font-medium">Present Address</label>
              <input
                {...register("presentAddress", { required: "Adres zorunludur" })}
                type="text"
                className={inputClass("presentAddress")}
              />
            </div>

            {/* Permanent Address */}
            <div className="flex flex-col gap-2">
              <label className="text-[#343C6A] text-sm font-medium">Permanent Address</label>
              <input
                {...register("permanentAddress")}
                type="text"
                className={inputClass("permanentAddress")}
              />
            </div>

            {/* City */}
            <div className="flex flex-col gap-2">
              <label className="text-[#343C6A] text-sm font-medium">City</label>
              <input
                {...register("city", { required: "Şehir zorunludur" })}
                type="text"
                className={inputClass("city")}
              />
            </div>

            {/* Postal Code */}
            <div className="flex flex-col gap-2">
              <label className="text-[#343C6A] text-sm font-medium">Postal Code</label>
              <input
                {...register("postalCode", { required: "Posta kodu zorunludur" })}
                type="text"
                className={inputClass("postalCode")}
              />
            </div>

            {/* Country */}
            <div className="flex flex-col gap-2">
              <label className="text-[#343C6A] text-sm font-medium">Country</label>
              <input
                {...register("country", { required: "Ülke zorunludur" })}
                type="text"
                className={inputClass("country")}
              />
            </div>
          </div>
        </div>

        {/* Buton Bölümü */}
        <div className="flex justify-end mt-10">
          <button
            type="submit"
            disabled={!isValid}
            className={`
              w-full md:w-48 h-12 text-white rounded-2xl font-medium transition-all
              ${isValid ? "bg-[#1814F3] hover:bg-[#1210c4] active:scale-95" : "bg-gray-300 cursor-not-allowed"}
            `}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}