import { CSSProperties } from "react";

type Props = {
    text: string;
    styles?: CSSProperties;
};

export function Paragraph(props: Props) {
    return <p className={'description'} style={props.styles}>{props.text}</p>;
}