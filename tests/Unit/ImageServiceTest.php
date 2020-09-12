<?php

namespace Tests\Unit;

use App\Services\ImageService;
use Tests\TestCase;

class ImageServiceTest extends TestCase
{
    /**
     * @return void
     */
    public function test_get_random_image_filepath()
    {
        $imageService = new ImageService();
        $imageService->getRandomImageFrom(resource_path('images'));
        $filename = $imageService->getRandomImageFrom(resource_path('images'));
        $this->assertFileExists($filename);

        $this->assertNotEmpty($imageService->getImageModelGeneratedRandomly());
    }
}
