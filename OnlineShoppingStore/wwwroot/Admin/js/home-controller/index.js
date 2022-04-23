function DeleteSliderImage(id,title) {
    swal.fire({
        title: 'حذف تصویر',
        text: `آیا از حذف ${title} مطمئن هستید؟`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#7cacbe',
        confirmButtonText: 'بله',
        cancelButtonText: 'خیر'
    }).then((result) => {
        if (result.value) {
            var postData = {
                'id': id ,
            };

            $.ajax({
                contentType: 'application/x-www-form-urlencoded',
                dataType: 'json',
                type: "POST",
                url: "/admin/home/deleteslider",
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
                    swal.fire("هشدار!", "عملیات با خطا مواجه شد", "error");
                }

            });

        }
    })
}

function ChangeImageVisibility(id) {
    swal.fire({
        title: 'تغییر وضعیت',
        text: `آیا از انجام عملیات مطمئن هستید؟`,
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
                url: "/admin/home/ChangeImageVisibility",
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
                    swal.fire("هشدار!", "عملیات با خطا مواجه شد", "error");
                }

            });

        }
    })
}
