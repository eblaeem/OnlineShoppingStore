namespace OnlineShoppingStore.Common.ResultDto
{
    public class ApiResult
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
    }

    public class ApiResult<T>
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public T Result { get; set; }
    }
}
