<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArticleResource\Pages;
use App\Models\Article;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Actions\Action as FormAction;
use Filament\Forms\Form;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ArticleResource extends Resource
{
    protected static ?string $model = Article::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Main data')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->live(onBlur: true)
                            ->afterStateUpdated(function (Set $set, ?string $state) {
                                $set('slug', Str::slug($state));
                            })
                            ->required()
                            ->minLength(50)
                            ->maxLength(65)
                            ->columnSpanFull(),
                        Forms\Components\MarkdownEditor::make('content')
                            ->toolbarButtons([
                                'blockquote',
                                'bold',
                                'bulletList',
                                'codeBlock',
                                'heading',
                                'italic',
                                'link',
                                'orderedList',
                                'redo',
                                'strike',
                                'table',
                                'undo',
                            ])
                            ->columnSpanFull(),
                    ])->columnSpan(['sm' => 3, 'md' => 2, 'xl' => 2, '2xl' => 2]),

                Section::make('Metadata')
                    ->collapsible()
                    ->schema([
                        Forms\Components\TextInput::make('slug')
                            ->required()
                            ->hintAction(
                                FormAction::make('viewLiveArticle')
                                    ->icon('heroicon-m-globe-americas')
                                    ->url(fn (Model $record): string => route('articles.view', ['article' => $record]))
                                    ->openUrlInNewTab()
                                    ->visible(fn ($record) => $record?->status == 'published')
                            ),
                        Forms\Components\MarkdownEditor::make('description')
                            ->toolbarButtons([
                                'bold',
                                'italic',
                                'link',
                                'redo',
                                'strike',
                                'undo',
                            ])
                            ->required()
                            ->minLength(120)
                            ->maxLength(180),
                        Forms\Components\Radio::make('status')
                            ->options([
                                'draft' => 'Draft',
                                'published' => 'Published',
                            ])->inline(),
                    ])->columnSpan(['sm' => 3, 'md' => 1, 'xl' => 1, '2xl' => 1]),
            ])
            ->columns(['md' => 3, 'xl' => 3]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->sortable(),
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'draft' => 'orange',
                        'published' => 'success',
                    }),
            ])
            ->defaultSort('id', 'desc')
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Action::make('View live article')
                    ->url(fn (Model $record): string => route('articles.view', ['article' => $record]))
                    ->openUrlInNewTab()
                    ->visible(fn ($record) => $record?->status == 'published')
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->emptyStateActions([
                Tables\Actions\CreateAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListArticles::route('/'),
            'create' => Pages\CreateArticle::route('/create'),
            'edit' => Pages\EditArticle::route('/{record}/edit'),
        ];
    }
}
