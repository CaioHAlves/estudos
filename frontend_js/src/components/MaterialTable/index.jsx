import React, {useState} from 'react'
import PropTypes from 'prop-types'
import MaterialTable from 'material-table'
import { Content } from './styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export function Table({ 
  columns, 
  data, 
  title, 
  actions, 
  search, 
  focusRow, 
  selection, 
  onSelection, 
  headerStyle,
  rowStyle,
  onCellEditApproved, 
  onRowUpdate,
  ...props 
}) {

  const [selectedRow, setSelectedRow] = useState(null)
  const media = useMediaQuery('(max-height: 685px)')
  const bodyHeight = media ? 250 : 400

  return (
    <Content>
      <MaterialTable
        {...props}
        columns={columns}
        data={data}
        title={title}
        actions={actions}
        onRowClick={((_evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
        options={{
          actionsColumnIndex: -1,
          maxBodyHeight: bodyHeight,
          search: search,
          // rowStyle: rowData => (
          //   focusRow === true ? {
          //     backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
          //   } : {backgroundColor: '#FFF'}
          // ),
          selection: selection,
          headerStyle: headerStyle,
          rowStyle: rowStyle,
        }}
        cellEditable={{
          onCellEditApproved: onCellEditApproved
        }}
        editable={{
          onRowUpdate: onRowUpdate
        }}
        onSelectionChange={onSelection}
      />
    </Content>
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    field: PropTypes.string,
    cellStyle: PropTypes.object,
    headerStyle: PropTypes.object,
    initialEditValue: PropTypes.string,
    editable: PropTypes.string,
  })).isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
  actions: PropTypes.array,
  search: PropTypes.bool,
  focusRow: PropTypes.bool,
  selection: PropTypes.bool,
  onSelection: PropTypes.func,
  headerStyle: PropTypes.object,
  rowStyle: PropTypes.object,
  onCellEditApproved: PropTypes.func,
  onRowUpdate: PropTypes.func,
}

Table.defaultProps = {
  columns: [{
    initialEditValue: 'initial edit value',
    editable: 'never'
  }],
  data: [],
  headerStyle: {background: '#c0c0c0'},
}

export default Table