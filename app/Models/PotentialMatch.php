<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class PotentialMatch extends Model
{
    protected $table = 'potential_matches';

    public function lostReport(): BelongsTo
{
    return $this->belongsTo(
        ItemReport::class,
        'lost_report_id'
    );
}

public function foundReport(): BelongsTo
{
    return $this->belongsTo(
        ItemReport::class,
        'found_report_id'
    );
}
}
