using Microsoft.EntityFrameworkCore.Migrations;

namespace OnlineShoppingStore.Persistance.Migrations
{
    public partial class addPropToMainSlider : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Pragraph",
                table: "MainSliders",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PreTitle",
                table: "MainSliders",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "MainSliders",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Pragraph",
                table: "MainSliders");

            migrationBuilder.DropColumn(
                name: "PreTitle",
                table: "MainSliders");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "MainSliders");
        }
    }
}
