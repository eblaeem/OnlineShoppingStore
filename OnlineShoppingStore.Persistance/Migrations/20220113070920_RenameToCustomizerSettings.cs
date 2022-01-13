using Microsoft.EntityFrameworkCore.Migrations;

namespace OnlineShoppingStore.Persistance.Migrations
{
    public partial class RenameToCustomizerSettings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SettingValue_AdminSettings_SettingKey",
                table: "SettingValue");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AdminSettings",
                table: "AdminSettings");

            migrationBuilder.RenameTable(
                name: "AdminSettings",
                newName: "CustomizerSettings");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CustomizerSettings",
                table: "CustomizerSettings",
                column: "Key");

            migrationBuilder.AddForeignKey(
                name: "FK_SettingValue_CustomizerSettings_SettingKey",
                table: "SettingValue",
                column: "SettingKey",
                principalTable: "CustomizerSettings",
                principalColumn: "Key",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SettingValue_CustomizerSettings_SettingKey",
                table: "SettingValue");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CustomizerSettings",
                table: "CustomizerSettings");

            migrationBuilder.RenameTable(
                name: "CustomizerSettings",
                newName: "AdminSettings");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AdminSettings",
                table: "AdminSettings",
                column: "Key");

            migrationBuilder.AddForeignKey(
                name: "FK_SettingValue_AdminSettings_SettingKey",
                table: "SettingValue",
                column: "SettingKey",
                principalTable: "AdminSettings",
                principalColumn: "Key",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
