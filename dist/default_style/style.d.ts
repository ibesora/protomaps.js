import { Rule } from "../painter";
import { LabelRule } from "../labeler";
export interface DefaultStyleParams {
    earth: string;
    glacier: string;
    residential: string;
    hospital: string;
    cemetery: string;
    school: string;
    industrial: string;
    wood: string;
    grass: string;
    park: string;
    water: string;
    sand: string;
    buildings: string;
    highwayCasing: string;
    majorRoadCasing: string;
    mediumRoadCasing: string;
    minorRoadCasing: string;
    highway: string;
    majorRoad: string;
    mediumRoad: string;
    minorRoad: string;
    boundaries: string;
    mask: string;
    countryLabel: string;
    cityLabel: string;
    stateLabel: string;
    neighbourhoodLabel: string;
    landuseLabel: string;
    waterLabel: string;
    naturalLabel: string;
    roadsLabel: string;
    poisLabel: string;
}
export declare const paintRules: (params: DefaultStyleParams, shade: string) => Rule[];
export declare const labelRules: (params: DefaultStyleParams, shade: string, language1: string[], language2: string[]) => LabelRule[];
