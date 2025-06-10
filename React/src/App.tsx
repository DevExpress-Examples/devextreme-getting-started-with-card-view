import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import CardView, { Column, Paging, Pager, Selection, HeaderFilter, SearchPanel, ColumnChooser, Position } from 'devextreme-react/card-view';
import { employees } from './data.ts';

function App(): JSX.Element {
  return (
    <CardView
    dataSource={employees}
    width={1000}
    keyExpr="ID"
    allowColumnReordering={true}
    cardsPerRow="auto"
    cardMinWidth={200}
  >
    <Paging
      pageSize={3}
    />
    <Pager
      showInfo={true}
      showNavigationButtons={true}
      showPageSizeSelector={true}
    />
    <Selection mode="multiple" />
    <HeaderFilter visible={true} />
    <SearchPanel visible={true} />
    <ColumnChooser
      enabled={true}
      height={340}
      mode="select"
    >
      <Position
        my="right top"
        at="right bottom"
        of=".dx-cardview-column-chooser-button"
      />
      <Selection selectByClick={true} />
    </ColumnChooser>
    <Column dataField="FullName" allowHiding={false} />
    <Column dataField="Position" />
    <Column dataField="Email" />
  </CardView>
  );
}

export default App;
