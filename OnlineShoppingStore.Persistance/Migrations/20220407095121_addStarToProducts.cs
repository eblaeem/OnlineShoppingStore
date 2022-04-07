using Microsoft.EntityFrameworkCore.Migrations;

namespace OnlineShoppingStore.Persistance.Migrations
{
    public partial class addStarToProducts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Star",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Star",
                table: "Products");
        }
    }
}
