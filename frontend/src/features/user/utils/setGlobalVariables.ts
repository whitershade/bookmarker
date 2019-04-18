import { forEach } from 'lodash';

const root = document.documentElement;

export default function (values: any): void {
  forEach(values, (value: string, name: string) => root.style.setProperty(`--${name}`, value));
}
