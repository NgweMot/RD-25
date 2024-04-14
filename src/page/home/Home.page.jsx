import React from "react";
import NavComponent from "../../components/ui/nav/Nav.component";
import { Button } from "../../components/ui/button";
import { FaPlus } from "react-icons/fa6";
import EmptyBox from "../../lottie/EmptyBox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "../../components/ui/sheet";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import AuthGuard from "../../components/ui/guard/Auth.guard";

const HomePage = () => {
  return (
   <AuthGuard>
     <Sheet>
      <div>
        <NavComponent />
        <div className="h-20 px-52 mx-auto flex justify-end mt-5">
          <SheetTrigger>
            <Button className="bg-blue-500 justify-center items-center flex gap-2">
              <FaPlus />
              Create Course
            </Button>
          </SheetTrigger>
        </div>
        <div className="bg-white h-[500px] flex justify-center items-center">
          <EmptyBox />
        </div>
        <div>
          {/* <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger> */}
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </div>
      </div>
    
    </Sheet>
   </AuthGuard>
    
  );
};

export default HomePage;
