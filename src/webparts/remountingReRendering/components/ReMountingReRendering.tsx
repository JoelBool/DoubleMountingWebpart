import { Stack } from '@fluentui/react';
import * as React from 'react';

export interface IReMountingReRenderingProps {
}

export default class ReMountingReRendering extends React.Component<IReMountingReRenderingProps, {}> {

  public componentDidMount(): void {
    console.log("componentDidMount")
    this.asyncMethodCall().catch((err) => {console.error(err)})
  }

  public async asyncMethodCall(): Promise<void> {
    
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log(`Async method called from componentDidMount resolved`)
  }

  public componentWillUnmount(): void {
    console.log("componentWillUnmount")
  }

  public render(): React.ReactElement<IReMountingReRenderingProps> {
    
    return (
      <Stack style={{backgroundColor: "#F0F0F0", padding: "50px"}} horizontal horizontalAlign='center'>
        <Stack.Item>
          <h3>ComponentDidMount will be called twice</h3>
          <p>With this web part added on a page</p>
          <ul>
            <li>Publish the page</li>
            <li>Open developer tools to see console.logs</li>
            <li>Start editing the page</li>
            <li>Note that you will see componentDidMount twice in the console logs</li>
          </ul>
          <p>When going into edit mode it looks like</p>
          <ol>
            <li>The web part from view mode is first dismounted</li>
            <li>The web part is mounted again</li>
            <li><strong>The web part is dismounted again</strong></li>
            <li><strong>The web part is mounted</strong></li>
          </ol>
          <p>Expected behavior would be that the web part is mounted once. (I.e. without step 3 and 4)</p>
        </Stack.Item>
      </Stack>
    );
  }
}
