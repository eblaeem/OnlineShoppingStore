function DeleteUser(userId,fullName) {
    swal.fire({
        title: 'حذف کاربر',
        text: `آیا از حذف ${fullName} مطمئن هستید؟`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#7cacbe',
        confirmButtonText: 'بله',
        cancelButtonText: 'خیر'
    }).then((result) => {
        if (result.value) {
            var postData = {
                'userId': userId,
            };

            $.ajax({
                contentType: 'application/x-www-form-urlencoded',
                dataType: 'json',
                type: "POST",
                url: "Users/Delete",
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

function ChangeUserState(userId,fullName) {
    Swal.fire({
        title: 'تغییر وضعیت کاربر',
        text: `آیا از تغییر وضعیت ${fullName} مطمئن هستید؟`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#7cacbe',
        confirmButtonText: 'بله',
        cancelButtonText: 'خیر'
    }).then((result) => {
        if (result.value) {

            var postData = {
                'userId': userId,
            };

            $.ajax({
                contentType: 'application/x-www-form-urlencoded',
                dataType: 'json',
                type: "POST",
                url: "Users/ChangeUserState",
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
