<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('entries', function (Blueprint $table) {
        $table->id();                          // Auto-incrementing ID
        $table->string('title');               // VARCHAR(255)
        $table->text('body');                  // Long text
        $table->decimal('hours_coded', 4, 2);  // Hours like 2.5
        $table->string('tags')->nullable();    // Optional tags
        $table->timestamps();                  // created_at, updated_at
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entries');
    }
};
