import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";

const Navbar = () => {
  return (
    <div className="p-2 fixed top-0 w-full border-b shadow-sm bg-white flex items-center justify-between h-14">
      <div className="flex items-center">
        <Logo />
        <Button size="sm" variant="primary" className="ml-auto hidden md:block">
          Create
        </Button>
        <Button size="sm" variant="primary" className="ml-auto md:hidden">
          <Plus className="h-4 w-4"/>
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
