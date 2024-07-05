import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import ReMountingReRendering, { IReMountingReRenderingProps } from './components/ReMountingReRendering';


export interface IReMountingReRenderingWebPartProps {
}

export default class ReMountingReRenderingWebPart extends BaseClientSideWebPart<IReMountingReRenderingWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReMountingReRenderingProps> = React.createElement(
      ReMountingReRendering,
      {}
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    console.log("unmountComponentAtNode")
    ReactDom.unmountComponentAtNode(this.domElement);
  }
}
