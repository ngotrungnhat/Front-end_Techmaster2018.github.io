import React, { Component } from 'react'

export default class EditBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.objDataEdit.id,
      blog_title: this.props.objDataEdit.blog_title,
      blog_content: this.props.objDataEdit.blog_content,
      blog_background: this.props.objDataEdit.blog_background
    }
  }

  isChange = (event) => {
    const name = event.target.name,
          value = event.target.value
    this.setState({[name]: value})
  }

  handleClickEditSave = () => {
    const objDataEdited = {}
    objDataEdited.id = this.state.id
    objDataEdited.blog_title = this.state.blog_title
    objDataEdited.blog_content = this.state.blog_content
    objDataEdited.blog_background = this.state.blog_background
    this.props.ChangeSttFormEdit()
    this.props.addDataEditedInDatabase(objDataEdited)
  }
  render() {
    return (
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button  onClick={() => this.props.ChangeSttFormEdit()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body"> 
            <form>
                <div className="form-group">
                  <label>Ảnh</label>
                  <input onChange={(event) => this.isChange(event)} type="text" defaultValue={this.props.objDataEdit.blog_background} className="form-control" name="blog_background" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh bài đăng" />
                </div>
                <div className="form-group">
                  <label>Tiêu Đề</label>
                  <input onChange={(event) => this.isChange(event)} type="text" defaultValue={this.props.objDataEdit.blog_title} className="form-control" name="blog_title" id="true" aria-describedby="helpId" placeholder="Nhập tên bài đăng" />
                </div>
                <div className="form-group">
                  <label>Nội Dung Câu Chuyện</label>
                  <textarea onChange={(event) => this.isChange(event)} defaultValue={this.props.objDataEdit.blog_content} className="form-control" name="blog_content" rows={5} placeholder="Nhập nội dung bài đăng"/>
                </div>
                <button onClick={() => this.handleClickEditSave()} type="button" className="btn btn-block btn-info">Lưu Thay Đổi</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
