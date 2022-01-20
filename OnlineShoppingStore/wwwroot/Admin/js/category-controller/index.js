function DeleteCategory(id) {
    swal.fire({
        title: 'حذف گروه',
        text: "آیا از حذف گروه مطمئن هستید؟",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#7cacbe',
        confirmButtonText: 'بله',
        cancelButtonText: 'خیر'
    }).then((result) => {
        if (result.value) {
            var postData = {
                'id': id,
            };

            $.ajax({
                contentType: 'application/x-www-form-urlencoded',
                dataType: 'json',
                type: "POST",
                url: "Categories/Delete",
                data: postData,
                success: function (data) {
                    if (data.isSuccess == true) {
                        swal.fire(
                            'موفق!',
                            data.message,
                            'success'
                        ).then(function (isConfirm) {
                            location.reload();
                        });
                    }
                    else {

                        swal.fire(
                            'هشدار!',
                            data.message,
                            'warning'
                        );

                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    swal.hideLoading();
                    swal.fire("!هشدار ", "عملیات با خطا مواجه شد", "خطا");
                }

            });

        }
    })
}
