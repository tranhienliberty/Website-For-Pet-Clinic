<!DOCTYPE html>
<html>
<head>
  <title>Trang quản lý</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <h1>Trang quản lý</h1>
    <button id="edit-button" class="btn btn-info" style="background-color: #FF6699; border-color: #FF6699;">Edit</button>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="edit-modal" tabindex="-1" role="dialog" aria-labelledby="edit-modal-label" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="edit-modal-label">Chỉnh sửa thông tin</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- Địa chỉnh sửa thông tin tại đây -->
          <form>
            <div class="form-group">
              <label for="full-name">Họ và tên</label>
              <input type="text" id="full-name" class="form-control">
            </div>
            <!-- Thêm các trường thông tin khác tại đây -->
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Lưu</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
        </div>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"></script>
  <script>
    $(document).ready(function() {
      $("#edit-button").click(function() {
        $("#edit-modal").modal("show");
      });
    });
  </script>
</body>
</html>
