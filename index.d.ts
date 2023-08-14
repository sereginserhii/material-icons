import * as React from "react";
export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}
export declare type IconType = (props: IconBaseProps) => JSX.Element;
export declare function mapIcon(iconName: string | null): IconType | null;
export declare const iconNames: string[];
