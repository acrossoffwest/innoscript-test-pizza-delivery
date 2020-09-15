<?php


namespace App\Services;


use App\Models\Image;
use Illuminate\Http\UploadedFile;

class ImageService
{
    public function getRandomImageFrom(string $dirpath)
    {
        $dirpath = realpath($dirpath);
        $imagesFilenames = array_values(array_filter(scandir($dirpath), fn($filename) => !in_array($filename, ['.', '..'])));
        $imageFilename = $imagesFilenames[rand(0, count($imagesFilenames) - 1)];
        return implode('/', [$dirpath, $imageFilename]);
    }

    /**
     * @param string $absolutePath
     * @return UploadedFile
     */
    public function getUploadedFileBy(string $absolutePath): UploadedFile
    {
        $explodedPath = explode('/', $absolutePath);
        $fileTmp = new \Symfony\Component\HttpFoundation\File\UploadedFile(
            $absolutePath,
            $explodedPath[count($explodedPath) - 1]
        );
        return UploadedFile::createFromBase($fileTmp);
    }

    public function getTmpFilepath(string $ext = 'jpg')
    {
        return tempnam(sys_get_temp_dir(), 'Pizza_Zimma_Uploaded_File_'.time()).'.'.$ext;
    }

    public function extension(UploadedFile $uploadedFile)
    {
        $ext = null;
        if (!empty($uploadedFile->getClientOriginalExtension())) {
            $ext =  $uploadedFile->getClientOriginalExtension();
        } else {
            $ext = mime_type_to_extension($uploadedFile->getMimeType());
        }

        return '.'.$ext;
    }

    public function getRandomImageRelativePath(string $dir = 'pizza', string $disk = 'public'): string
    {
        $filepath = $this->getRandomImageFrom(resource_path('images/'.trim($dir, '/')));
        $uploadedFile = $this->getUploadedFileBy($filepath)->getClientOriginalExtension();
        $tmpFilepath = $this->getTmpFilepath($uploadedFile);
        copy($filepath, $tmpFilepath);
        $filepath = $this->getUploadedFileBy($tmpFilepath)->store('public');
        return $this->getFilename($filepath);
    }

    private function getFilename($filepath)
    {
        $filepath = explode('/', $filepath);
        return $filepath[count($filepath) - 1];
    }

    public function getImageModelGeneratedRandomly(string $dir = 'pizza', string $disk = 'public'): Image
    {
        $path = $this->getRandomImageRelativePath($dir, $disk);

        /** @var Image $image */
        $image = Image::query()->create([
            'path' => $path,
            'disk' => $disk
        ]);
        return $image;
    }
}
