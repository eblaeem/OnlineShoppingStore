using Microsoft.EntityFrameworkCore.Migrations;

namespace OnlineShoppingStore.Persistance.Migrations
{
    public partial class AddCostStrategyToProduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductProperties_Properties_PropertiyId",
                table: "ProductProperties");

            migrationBuilder.RenameColumn(
                name: "PropertiyId",
                table: "ProductProperties",
                newName: "PropertyId");

            migrationBuilder.RenameIndex(
                name: "IX_ProductProperties_PropertiyId",
                table: "ProductProperties",
                newName: "IX_ProductProperties_PropertyId");

            migrationBuilder.AddColumn<long>(
                name: "ProductId",
                table: "CostStrategies",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_CostStrategies_ProductId",
                table: "CostStrategies",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_CostStrategies_Products_ProductId",
                table: "CostStrategies",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductProperties_Properties_PropertyId",
                table: "ProductProperties",
                column: "PropertyId",
                principalTable: "Properties",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CostStrategies_Products_ProductId",
                table: "CostStrategies");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductProperties_Properties_PropertyId",
                table: "ProductProperties");

            migrationBuilder.DropIndex(
                name: "IX_CostStrategies_ProductId",
                table: "CostStrategies");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "CostStrategies");

            migrationBuilder.RenameColumn(
                name: "PropertyId",
                table: "ProductProperties",
                newName: "PropertiyId");

            migrationBuilder.RenameIndex(
                name: "IX_ProductProperties_PropertyId",
                table: "ProductProperties",
                newName: "IX_ProductProperties_PropertiyId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductProperties_Properties_PropertiyId",
                table: "ProductProperties",
                column: "PropertiyId",
                principalTable: "Properties",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
