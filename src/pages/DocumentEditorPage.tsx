import {
    DocumentEditorContainerComponent, Toolbar
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);



export const DocumentEditorPage = () => {
    return (
        <div className="">
            <DocumentEditorContainerComponent
                id="container" height={'80vh'} width="inherit"
                serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
                enableToolbar={true} />
        </div>);

}

