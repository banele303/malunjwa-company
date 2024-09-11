import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "@radix-ui/react-icons"

export function ButtonDestructive() {
  return <Button variant="destructive">CONTACT US
   <ChevronRightIcon className="h-4 w-4 " />
  </Button>
}
