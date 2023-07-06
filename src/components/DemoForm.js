import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { UserContext } from "@/contexts/UserContext";
import { Form, Field } from "@/blocks/Form";
import { scrollToSection } from "@/blocks/MainFrame/Navbar";

const DemoForm = () => {
  const { u, token } = useContext(UserContext);
  const [user, setUser] = u;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    watch,
  } = useForm({
    defaultValues: {
      color: "Warm Brown",
    },
  });
  const [type, setType] = useState();
  const [errorLogo, setErrorLogo] = useState();
  const color = watch("color");

  const testURL = async (url) => {
    const response = await fetch("/api/validateURL/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        type: type,
      }),
    });
    const isValidURL = await response.json();
    if (isValidURL.ok) {
      return true;
    } else {
      return "Please enter a valid URL";
    }
  };

  const validateImageFileSize = (event) => {
    const file = event.target.files[0];
    const fileSizeInBytes = file.size;
    const maxSizeInBytes = 1024 * 1024; // 1MB

    if (fileSizeInBytes > maxSizeInBytes) {
      setErrorLogo({ message: "Image size exceeds 1 MB" });
    } else {
      setErrorLogo("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const saveData = async (event, id, field) => {
    event.preventDefault();
    try {
      await trigger(field);
      if (field === "custom_logo") {
        if (!errorLogo && !errors[field]) {
          scrollToSection(id);
        }
      } else {
        if (!errors[field]) {
          scrollToSection(id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitData = (data) => {
    const formData = new FormData();
    formData.append("url", data.url);
    formData.append("color", data.color);
    formData.append("email", data.email);
    formData.append("origin", "us");
    if (data.custom_logo[0]) {
      formData.append(
        "custom_logo",
        data.custom_logo[0],
        data.custom_logo[0].name
      );
    }

    fetch("https://sentiport.de.r.appspot.com/api/get-report/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    setUser({
      ...user,
      credits: user.credits - 1,
    });
    scrollToSection("thank-you");
  };

  return (
    <div className="text-center mx-auto carousel w-full mb-12">
      <div className="carousel-item relative w-full" id="home">
        <div className="grid">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl mb-6">
            Programmatic Report Generation of your App Review{" "}
            <span className="text-gradient">in Minutes</span>
          </h1>
          <article className="prose text-base sm:text-lg text-gray-300 mb-6">
            Supertype Summary creates a highly tailored pipeline that output
            bespoke PDF in minutes, not days or hours. Because your time is too
            valuable to be looking for insights from millions of user reviews on
            App Store or Google Play Store, Summary consolidates{" "}
            <span className="text-gradient">
              your most important data feeds{" "}
            </span>
            and puts them all{" "}
            <span className="text-gradient">
              in a digestible, insightful, actionable format
            </span>{" "}
            — delivered to your inbox on a schedule that works for you.
          </article>
          {!user ? (
            <label
              htmlFor="auth"
              className="btn rounded-full text-gradient bg-transparent border-blue-500 hover:text-gray-200 hover:border-blue-300 max-w-fit place-self-center"
            >
              Try for Free {">"}
            </label>
          ) : (
            <div className="text-center">
              <select
                className="select select-primary w-full max-w-xs rounded-full sm:mr-5 mb-5 sm:mb-0 focus:outline-none"
                defaultValue="placeholder"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="placeholder" disabled>
                  Select report you want to generate
                </option>
                <option value="PlayStore">Google Play Store</option>
                <option value="AppStore">App Store</option>
              </select>
              <Link
                href="#demo-page-1"
                className="btn rounded-full text-gradient bg-transparent border-blue-500 hover:text-gray-200 hover:border-blue-300 max-w-fit place-self-center"
                disabled={type ? false : true}
              >
                Generate Report {">"}
              </Link>
            </div>
          )}
        </div>
      </div>
      {user && (
        <>
          <div className="carousel-item relative w-full" id="demo-page-1">
            <div className="grid w-full">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl w-4/5 md:w-3/4 place-self-center">
                Provide us the <span className="text-gradient">{type} URL</span>{" "}
                of your application and we&apos;ll generate the app review
                report for you
              </h1>
              <Form className="mt-4 w-4/5 md:w-3/5 place-self-center self-start">
                <Field error={errors?.url}>
                  <div className="relative">
                    <input
                      {...register("url", {
                        required: `${type} URL is required`,
                        validate: testURL,
                      })}
                      className="form-control input placeholder-gray-500 placeholder-opacity-50 sm:placeholder-opacity-100 border-blue-500 bg-transparent rounded-xl focus:shadow-blue-500 focus:shadow-md focus:outline-none w-full max-w mb-1 py-3 px-4 leading-tight disabled:hover:cursor-not-allowed"
                      type="url"
                      id="url"
                      placeholder={
                        type === "AppStore"
                          ? "https://apps.apple.com/us/app/app-name/id..."
                          : "https://play.google.com/store/apps/details?id=..."
                      }
                      onKeyDown={handleKeyDown}
                    />
                    <button
                      onClick={(e) => saveData(e, "demo-page-2", "url")}
                      className="absolute top-0 right-0 bottom-0 flex items-center justify-center px-4 bg-transparent border-none cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          fill="currentColor"
                          d="M9.59 10.59L8.17 9.17 4.5 12.83 8.17 16.5 9.59 15.09 7.16 12.66 20 12.66 20 11.34z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </Field>
                <div className="flex w-full justify-center">
                  <Link
                    href="#home"
                    onClick={() =>
                      reset({
                        url: "",
                        email: "",
                      })
                    }
                    className="btn rounded-full bg-red-500 text-gray-200 hover:border-red-300 max-w-fit mr-5"
                  >
                    Cancel ✕
                  </Link>
                  <button
                    onClick={(e) => saveData(e, "demo-page-2", "url")}
                    className="btn rounded-full text-gradient bg-transparent border-blue-500 hover:text-gray-200 hover:border-blue-300 max-w-fit"
                  >
                    Next {">"}
                  </button>
                </div>
              </Form>
            </div>
          </div>
          <div className="carousel-item relative w-full" id="demo-page-2">
            <div className="grid w-full">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl w-4/5 md:w-3/4 place-self-center">
                Upload your company&apos;s{" "}
                <span className="text-gradient">logo</span> to be added to your
                app review report
              </h1>
              <Form className="mt-4 w-4/5 md:w-3/5 place-self-center self-start">
                <Field
                  error={errorLogo || errors?.custom_logo}
                  hint=".jpg/.jpeg/.png/.webp, max 1 MB"
                >
                  <input
                    {...register("custom_logo")}
                    type="file"
                    className="file-input border-blue-500 w-full max-w-xs"
                    accept=".jpg,.jpeg,.webp,.png"
                    onChange={(e) => validateImageFileSize(e)}
                  />
                </Field>
                <div className="flex w-full justify-center mt-3">
                  <Link
                    href="#demo-page-1"
                    className="btn rounded-full bg-red-500 text-gray-200 hover:border-red-300 max-w-fit mr-5"
                  >
                    {"<"} Back
                  </Link>
                  <button
                    onClick={(e) => saveData(e, "demo-page-3", "custom_logo")}
                    className="btn rounded-full text-gradient bg-transparent border-blue-500 hover:text-gray-200 hover:border-blue-300 max-w-fit"
                  >
                    Next {">"}
                  </button>
                </div>
              </Form>
            </div>
          </div>
          <div className="carousel-item relative w-full" id="demo-page-3">
            <div className="grid w-full">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl w-4/5 md:w-3/4 place-self-center">
                Choose one color that represents your{" "}
                <span className="text-gradient">branding style</span>
              </h1>
              <Form className="mt-8 w-4/5 md:w-3/5 place-self-center self-start">
                <div className="grid sm:grid-cols-12 gap-12 mb-8">
                  <div className="mockup-window glass sm:col-span-9 rounded-lg">
                    <img src={`images/${color}.png`} />
                  </div>
                  <div className="sm:col-span-3">
                    <div className="grid grid-cols-2 gap-x-2 sm:gap-0 sm:grid-cols-none">
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text ml-0">Warm Brown</span>
                          <input
                            {...register("color")}
                            type="radio"
                            value="Warm Brown"
                            className="radio border-slate-500 checked:bg-[#a88c6c]"
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Cloudy Blue</span>
                          <input
                            {...register("color")}
                            type="radio"
                            value="Cloudy Blue"
                            className="radio border-slate-500 checked:bg-[#c0d4ec]"
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Peach</span>
                          <input
                            {...register("color")}
                            type="radio"
                            value="Peach"
                            className="radio border-slate-500 checked:bg-[#c89f9c]"
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Dark Blue</span>
                          <input
                            {...register("color")}
                            type="radio"
                            value="Dark Blue"
                            className="radio border-slate-500 checked:bg-[#203454]"
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Matcha</span>
                          <input
                            {...register("color")}
                            type="radio"
                            value="Matcha"
                            className="radio border-slate-500 checked:bg-[#484c34]"
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Lonestar</span>
                          <input
                            {...register("color")}
                            type="radio"
                            value="Lonestar"
                            className="radio border-slate-500 checked:bg-[#680404]"
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Mythical Purple</span>
                          <input
                            {...register("color")}
                            type="radio"
                            value="Mythical Purple"
                            className="radio border-slate-500 checked:bg-[#e01c94]"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-center">
                  <Link
                    href="#demo-page-2"
                    className="btn rounded-full bg-red-500 text-gray-200 hover:border-red-300 max-w-fit mr-5"
                  >
                    {"<"} Back
                  </Link>
                  <button
                    onClick={(e) => saveData(e, "demo-page-4", "custom_logo")}
                    className="btn rounded-full text-gradient bg-transparent border-blue-500 hover:text-gray-200 hover:border-blue-300 max-w-fit"
                  >
                    Next {">"}
                  </button>
                </div>
              </Form>
            </div>
          </div>
          <div className="carousel-item relative w-full" id="demo-page-4">
            <div className="grid w-full">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl w-4/5 md:w-3/4 place-self-center">
                Enter your <span className="text-gradient">email address</span>{" "}
                so we can send you the generated app review report
              </h1>
              <Form className="mt-4 w-4/5 md:w-3/5 place-self-center self-start">
                <Field error={errors?.email}>
                  <div className="relative">
                    <input
                      {...register("email", {
                        required: "Email address is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                      className="form-control input placeholder-gray-500 placeholder-opacity-50 sm:placeholder-opacity-100 border-blue-500 bg-transparent rounded-xl focus:shadow-blue-500 focus:shadow-md focus:outline-none w-full max-w mb-1 py-3 px-4 leading-tight disabled:hover:cursor-not-allowed"
                      type="email"
                      id="demo-email"
                      placeholder="your.email@mail.com"
                      onKeyDown={handleKeyDown}
                    />
                    <button
                      onClick={(e) => saveData(e, "demo-page-5", "email")}
                      className="absolute top-0 right-0 bottom-0 flex items-center justify-center px-4 bg-transparent border-none cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          fill="currentColor"
                          d="M9.59 10.59L8.17 9.17 4.5 12.83 8.17 16.5 9.59 15.09 7.16 12.66 20 12.66 20 11.34z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </Field>
                <div className="flex w-full justify-center">
                  <Link
                    href="#demo-page-3"
                    className="btn rounded-full bg-red-500 text-gray-200 hover:border-red-300 max-w-fit mr-5"
                  >
                    {"<"} Back
                  </Link>
                  <button
                    onClick={(e) => saveData(e, "demo-page-5", "email")}
                    className="btn rounded-full text-gradient bg-transparent border-blue-500 hover:text-gray-200 hover:border-blue-300 max-w-fit"
                  >
                    Next {">"}
                  </button>
                </div>
              </Form>
            </div>
          </div>
          <div className="carousel-item relative w-full" id="demo-page-5">
            {user.credits > 0 ? (
              <div className="grid w-full">
                <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl w-4/5 md:w-3/4 place-self-center">
                  Your Credit Balance:{" "}
                  <span className="text-gradient">{user?.credits}</span>
                  <br />
                  Are you sure you want to use 1 credit balance for this
                  request?
                </h1>
                <Form
                  onSubmit={handleSubmit(submitData)}
                  className="mt-4 w-4/5 md:w-3/5 place-self-center self-start"
                >
                  <div className="flex w-full justify-center">
                    <Link
                      href="#demo-page-4"
                      className="btn rounded-full bg-red-500 text-gray-200 hover:border-red-300 max-w-fit mr-5"
                    >
                      {"<"} Back
                    </Link>
                    <button
                      type="submit"
                      className="btn rounded-full text-gradient bg-transparent border-blue-500 hover:text-gray-200 hover:border-blue-300 max-w-fit"
                    >
                      Yes, I&apos;m Sure
                    </button>
                  </div>
                </Form>
              </div>
            ) : (
              <div className="grid w-full">
                <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl w-4/5 md:w-3/4 place-self-center mb-6">
                  We&apos;re really sorry, but we&apos;re unable to process your
                  request as it appears you don&apos;t have any{" "}
                  <span className="text-gradient">Credits</span> available.
                </h1>
                <Link
                  href="#demo-page-4"
                  className="btn rounded-full text-gradient bg-transparent border-blue-500 hover:text-gray-200 hover:border-blue-300 max-w-fit place-self-center self-start"
                >
                  Top Up Credits
                </Link>
              </div>
            )}
          </div>

          <div className="carousel-item relative w-full" id="thank-you">
            <div className="grid w-full">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl w-4/5 md:w-3/4 place-self-center mb-6">
                Thank you for your{" "}
                <span className="text-gradient">request!</span>
              </h1>
              <article className="prose text-base sm:text-lg text-gray-300 mb-6">
                We&apos;ve received it and are currently processing it.{" "}
                <span className="text-gradient">
                  Within the next 10-20 minutes
                </span>
                , you&apos;ll receive an email from us with the result of your
                request. Please note that your credit balance will be{" "}
                <span className="text-gradient">
                  refunded if the request is failed
                </span>
                .
                <br /> If you have any questions or concerns in the meantime,
                please don&apos;t hesitate to{" "}
                <span className="underline decoration-blue-500 hover:decoration-blue-300">
                  <Link href="mailto:supertypeteknologi@gmail.com?subject=Inquiry:%20Supertype%20Summary">
                    contact us
                  </Link>
                </span>
                {". "}
                Our team is here to help and we&apos;ll do our best to get back
                to you as soon as we can. Thank you again for choosing our
                service!
              </article>
              <Form
                onSubmit={handleSubmit(submitData)}
                className="mt-4 w-4/5 md:w-3/5 place-self-center self-start"
              >
                <Link
                  href="#home"
                  onClick={() => {
                    reset();
                  }}
                  className="btn rounded-full text-gradient bg-transparent border-blue-500 hover:text-gray-200 hover:border-blue-300 max-w-fit"
                >
                  OK, Got it!
                </Link>
              </Form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DemoForm;
