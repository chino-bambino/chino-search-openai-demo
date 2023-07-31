import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "How to prepare Jollof Rice?", value: "How to prepare Jollof Rice?" },
    { text: "I would like to prepare to prepare soup any suggestions for me?", value: "I would like to prepare to prepare soup any suggestions for me?" },
    { text: "Are there any vegan alternatives?", value: "Are there any vegan alternatives?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
