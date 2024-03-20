import { Images } from "../Images/images";
import { Address } from "../Address/address";
import { Types } from 'mongoose';

export type Record = {
    id: string;
    name: string;
    images: Images;
    summary: string;
    address: Address;
    price: Types.Decimal128;
}
