using Microsoft.EntityFrameworkCore.Migrations;

namespace OnlineShoppingStore.Persistance.Migrations
{
    public partial class AddSettingTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AdminSettings",
                columns: table => new
                {
                    Key = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdminSettings", x => x.Key);
                });

            migrationBuilder.CreateTable(
                name: "SettingValue",
                columns: table => new
                {
                    SettingKey = table.Column<string>(type: "nvarchar(200)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SettingValue", x => new { x.SettingKey, x.Value });
                    table.ForeignKey(
                        name: "FK_SettingValue_AdminSettings_SettingKey",
                        column: x => x.SettingKey,
                        principalTable: "AdminSettings",
                        principalColumn: "Key",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SettingValue");

            migrationBuilder.DropTable(
                name: "AdminSettings");
        }
    }
}
