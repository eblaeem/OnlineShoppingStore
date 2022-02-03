using Microsoft.EntityFrameworkCore.Migrations;

namespace OnlineShoppingStore.Persistance.Migrations
{
    public partial class addPropertyType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Costs_CostStrategies_StrategyId",
                table: "Costs");

            migrationBuilder.DropTable(
                name: "CostStrategies");

            migrationBuilder.DropIndex(
                name: "IX_Costs_StrategyId",
                table: "Costs");

            migrationBuilder.DropColumn(
                name: "StrategyId",
                table: "Costs");

            migrationBuilder.AddColumn<long>(
                name: "PropertyTypeId",
                table: "Properties",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "BasePrice",
                table: "Products",
                type: "decimal(10,4)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.CreateTable(
                name: "PropertyType",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PropertyType", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Properties_PropertyTypeId",
                table: "Properties",
                column: "PropertyTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Properties_PropertyType_PropertyTypeId",
                table: "Properties",
                column: "PropertyTypeId",
                principalTable: "PropertyType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Properties_PropertyType_PropertyTypeId",
                table: "Properties");

            migrationBuilder.DropTable(
                name: "PropertyType");

            migrationBuilder.DropIndex(
                name: "IX_Properties_PropertyTypeId",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "PropertyTypeId",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "BasePrice",
                table: "Products");

            migrationBuilder.AddColumn<long>(
                name: "StrategyId",
                table: "Costs",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "CostStrategies",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductId = table.Column<long>(type: "bigint", nullable: false),
                    StrategyName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CostStrategies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CostStrategies_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Costs_StrategyId",
                table: "Costs",
                column: "StrategyId");

            migrationBuilder.CreateIndex(
                name: "IX_CostStrategies_ProductId",
                table: "CostStrategies",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_Costs_CostStrategies_StrategyId",
                table: "Costs",
                column: "StrategyId",
                principalTable: "CostStrategies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
