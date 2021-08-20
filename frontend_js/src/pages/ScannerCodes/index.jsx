import React, { useState } from 'react'
import { PageTitle, Scanner, Result } from '../../components'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ExternalDiv } from './styles'

export function ScannBarcodes() {

  const [state, setState] = useState({
    results: [],
    scanCode: '',
    modal: false,
    scanSuccess: false
  })

  const _toggle = () => {
    setState(prevState => ({
      modal: !prevState.modal,
      scanSuccess: false
    }));
  }

  const _onDetected = (result) => {
    setState({
      modal: false,
      scanCode: result ? result.codeResult.code : '',
      scanSuccess: result ? true : false,
      results: result
    });
  }

  return (
    <ExternalDiv>
      <PageTitle
        title="Scanner"
        subtitle="Scann your barcode"
      />
      <Container>
        <div className="scan">
          <Button variant="info" block onClick={_toggle}>
            Scan Barcode
        </Button>

          {state.scanSuccess ? (
            <Result key="scanResult" text={state.scanCode} />
          ) : null}
          <input id="scanner_result" type="text" value={state.scanCode} />
          <input id="scanner_result" type="text" value={state.result} />

          <Modal show={state.modal} onHide={_toggle}>
            <Modal.Header closeButton="true" />
            <Modal.Body>
              <Scanner handleScan={_onDetected} />
            </Modal.Body>
          </Modal>
        </div>
      </Container>
    </ExternalDiv>
  )
}

export default ScannBarcodes