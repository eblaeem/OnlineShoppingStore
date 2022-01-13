namespace OnlineShoppingStore.Domain.Entities.Setting
{
    public class SettingValue
    {
        public string SettingKey { get; set; }
        public string Value { get; set; }


        public virtual CustomizerSetting Setting { get; set; }
    }
}
