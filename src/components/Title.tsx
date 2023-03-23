type Props = {
    text: string;
};

export function Title(props: Props) {
    return <strong className={'title'}>{props.text}</strong>;
}