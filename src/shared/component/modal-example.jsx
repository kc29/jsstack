// @flow

import React from 'react';

const ModalExample = () =>
  <div className="js-modal-example modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal Title</h5>
          <button type="button" className="close" data-dismiss="modal">X<span className="sr-only">Close modal</span></button>
        </div>
        <div className="modal-body">
          This is a Bootstrap modal. It uses jQuery. UGH.
        </div>
        <div className="modal-footer">
          <button type="button" role="button" className="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>;

export default ModalExample;
