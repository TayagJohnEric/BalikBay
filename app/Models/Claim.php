<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Claim extends Model
{
    protected $table = 'claims';

       protected $fillable = [
        'found_report_id',
        'lost_report_id',
        'claimant_id',
        'ownership_details',
        'status',
        'reviewed_at',
    ];

    public function foundReport(): BelongsTo
{
    return $this->belongsTo(
        ItemReport::class,
        'found_report_id'
    );
}

public function lostReport(): BelongsTo
{
    return $this->belongsTo(
        ItemReport::class,
        'lost_report_id'
    );
}

public function claimant(): BelongsTo
{
    return $this->belongsTo(
        User::class,
        'claimant_id'
    );
}
}
