using Microsoft.EntityFrameworkCore.Migrations;

namespace OnlineShoppingStore.Persistance.Migrations
{
    public partial class AddSettingValues : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SettingValue_CustomizerSettings_SettingKey",
                table: "SettingValue");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SettingValue",
                table: "SettingValue");

            migrationBuilder.RenameTable(
                name: "SettingValue",
                newName: "SettingValues");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SettingValues",
                table: "SettingValues",
                columns: new[] { "SettingKey", "Value" });

            migrationBuilder.AddForeignKey(
                name: "FK_SettingValues_CustomizerSettings_SettingKey",
                table: "SettingValues",
                column: "SettingKey",
                principalTable: "CustomizerSettings",
                principalColumn: "Key",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SettingValues_CustomizerSettings_SettingKey",
                table: "SettingValues");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SettingValues",
                table: "SettingValues");

            migrationBuilder.RenameTable(
                name: "SettingValues",
                newName: "SettingValue");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SettingValue",
                table: "SettingValue",
                columns: new[] { "SettingKey", "Value" });

            migrationBuilder.AddForeignKey(
                name: "FK_SettingValue_CustomizerSettings_SettingKey",
                table: "SettingValue",
                column: "SettingKey",
                principalTable: "CustomizerSettings",
                principalColumn: "Key",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
