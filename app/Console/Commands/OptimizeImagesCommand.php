<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Intervention\Image\Facades\Image;

class OptimizeImagesCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'images:optimize {dir}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $dir = $this->prepareDir(realpath($this->argument('dir')));
        $images = array_filter(scandir($dir), fn($image) => !in_array($image, ['.', '..']));

        foreach ($images as $imageFilename) {
            $imageAbsolutePath = $dir.'/'.$imageFilename;
            $image = Image::make($imageAbsolutePath);
            $image->fit(900, 675, function ($constraint) {
                $constraint->upsize();
            });
            $image->save(null, 80)->destroy();
        }

        return 0;
    }

    private function prepareDir(string $dir): string
    {
        $dir = realpath($dir);
        if (is_dir($dir)) {
            return $dir;
        }
        throw new \Exception('Directory: "'.$dir.'" not found');
    }
}
