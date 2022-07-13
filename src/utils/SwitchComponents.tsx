import React, { ReactElement } from 'react';

export interface ReturnableComponent {
    name: string;
    component: ReactElement | any;
}

export interface SwitchComponentProps {
    components: ReturnableComponent[];
    selection: any;
}
const SwitchComponentFactory = ({components, selection}: SwitchComponentProps) => {
    let selectedComponent: JSX.IntrinsicElements | null = null
    components.forEach((component) => {
        if(component.name === selection) selectedComponent = component.component;
    })
    if(selectedComponent === null) return components[0].component;
    return selectedComponent;
}

export default SwitchComponentFactory;