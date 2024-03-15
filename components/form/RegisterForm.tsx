// "use client";
// import { Button } from "../ui/button";
// import { ChangeEvent } from "react";
// import { firstCaseUpper, valueWithoutSpaces } from "@/lib/utils";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "../ui/input";
// import { registerUser } from "@/lib/actions/register/register.action";
// import { RegisterValidation } from "@/lib/validations/form";
// import { RegisterValidationType } from "@/typings/form";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import { zodResolver } from "@hookform/resolvers/zod";

// export default function RegisterForm() {
//   const router = useRouter();
//   const form = useForm<RegisterValidationType>({
//     resolver: zodResolver(RegisterValidation),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//     },
//   });

//   const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name }: any = e.target;
//     const processedValue = valueWithoutSpaces(firstCaseUpper(e.target.value));
//     form.setValue(name, processedValue);
//   };

//   const onSubmit = async (values: RegisterValidationType) => {
//     try {
//       await registerUser({
//         firstName: values.firstName,
//         lastName: values.lastName,
//         email: values.email,
//         password: values.password,
//       });

//       form.setValue("firstName", "");
//       form.setValue("lastName", "");
//       form.setValue("email", "");
//       form.setValue("password", "");

//       router.push("/");
//     } catch (error) {
//       console.log("Error");
//     }
//   };

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="space-y-12 max-w-[1200px] mx-auto"
//         autoComplete="off"
//       >
//         <FormField
//           control={form.control}
//           name="firstName"
//           render={({ field }) => (
//             <FormItem>
//               <FormControl>
//                 <Input
//                   autoCapitalize="none"
//                   autoComplete="false"
//                   autoCorrect="off"
//                   id="firstName"
//                   placeholder="FIRST NAME*"
//                   type="text"
//                   {...field}
//                   onChange={handleFormChange}
//                 />
//               </FormControl>
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="lastName"
//           render={({ field }) => (
//             <FormItem>
//               <FormControl>
//                 <Input
//                   autoCapitalize="none"
//                   autoComplete="false"
//                   autoCorrect="off"
//                   id="lastName"
//                   placeholder="LAST NAME*"
//                   type="text"
//                   {...field}
//                   onChange={handleFormChange}
//                 />
//               </FormControl>
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormControl>
//                 <Input
//                   autoCapitalize="none"
//                   autoComplete="false"
//                   autoCorrect="off"
//                   id="email"
//                   placeholder="EMAIL*"
//                   type="email"
//                   {...field}
//                   onChange={(e) => {
//                     form.setValue("email", e.target.value);
//                   }}
//                 />
//               </FormControl>
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormControl>
//                 <Input
//                   autoCapitalize="none"
//                   autoComplete="new-password"
//                   autoCorrect="false"
//                   className="text-[0.6rem]"
//                   id="password"
//                   placeholder="PASSWORD*"
//                   type="password"
//                   {...field}
//                   onChange={(e) => {
//                     const processedValue = valueWithoutSpaces(e.target.value);
//                     form.setValue("password", processedValue);
//                   }}
//                 />
//               </FormControl>
//             </FormItem>
//           )}
//         />

//         <Button variant={"register"} size={"lg"}>
//           Create
//         </Button>
//       </form>
//     </Form>
//   );
// }
