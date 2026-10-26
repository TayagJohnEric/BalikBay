<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ItemReport extends Model
{
    protected $table = 'item_reports';

    public function user(): BelongsTo
{
    return $this->belongsTo(User::class);
}

public function category(): BelongsTo
{
    return $this->belongsTo(Category::class);
}

public function images(): HasMany
{
    return $this->hasMany(ReportImage::class);
}

public function lostMatches(): HasMany
{
    return $this->hasMany(
        PotentialMatch::class,
        'lost_report_id'
    );
}

public function foundMatches(): HasMany
{
    return $this->hasMany(
        PotentialMatch::class,
        'found_report_id'
    );
}

public function claimsReceived(): HasMany
{
    return $this->hasMany(
        Claim::class,
        'found_report_id'
    );
}
}
