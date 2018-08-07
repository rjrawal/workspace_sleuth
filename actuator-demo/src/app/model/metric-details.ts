import { Measurement } from "./measurement";
import { Tag } from "./tag";

export class MetricDetails {
    name?:String;
    measurements?: Measurement[];
    availableTags?:Tag[];
}
