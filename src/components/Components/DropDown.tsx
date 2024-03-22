import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/lib/database/models/category.model";
import { useState } from "react";

type DropDownProps = {
  value?: string;
  onChangeHanlder?: () => void;
};
const DropDown = ({ value, onChangeHanlder }: DropDownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([
    { _id: "1", name: "category 1" },
    { _id: "2", name: "category 2" },
  ]);
  return (
    <Select onValueChange={onChangeHanlder} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories?.length > 0 &&
          categories?.map((category) => (
            <SelectItem
              className="select-item p-regular-14"
              key={category?._id}
              value={category?._id}
            >
              {category?.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};
export default DropDown;
