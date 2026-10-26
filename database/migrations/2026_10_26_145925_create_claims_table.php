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
        Schema::create('claims', function (Blueprint $table) {
            $table->id();

            $table->foreignId('found_report_id')
                ->constrained('item_reports')
                ->cascadeOnDelete();

            $table->foreignId('lost_report_id')
                ->nullable()
                ->constrained('item_reports')
                ->nullOnDelete();

            $table->foreignId('claimant_id')
                ->constrained('users')
                ->cascadeOnDelete();

            $table->text('ownership_details');

            $table->enum('status', [
                'pending',
                'more_info_requested',
                'approved',
                'rejected',
                'cancelled',
            ])->default('pending');

            $table->timestamp('reviewed_at')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('claims');
    }
};
