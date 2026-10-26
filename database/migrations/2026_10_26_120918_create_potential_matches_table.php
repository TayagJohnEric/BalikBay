<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('potential_matches', function (Blueprint $table) {
            $table->id();

            $table->foreignId('lost_report_id')
                ->constrained('item_reports')
                ->cascadeOnDelete();

            $table->foreignId('found_report_id')
                ->constrained('item_reports')
                ->cascadeOnDelete();

            $table->decimal('score', 5, 2)->nullable();

            $table->enum('status', [
                'suggested',
                'confirmed',
                'dismissed',
            ])->default('suggested');

            $table->timestamps();

            $table->unique([
                'lost_report_id',
                'found_report_id',
            ]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('potential_matches');
    }
};
