class CommentsController < ApplicationController
  before_action :set_item
  before_action :set_comment, only: [:show, :update, :destroy, :edit]

  # get '/items/:item_id/comments'
  # return comments for a given item
  def index
    render component: "Comments", props: { item: @item, comments: @item.comments }
  end

  # # GET	/stores/:store_id/items/:id
  # show a single item
  def show
    render component: "Comment", props: { comment: @comment, item: @item}
  end

  # # get '/stores/:store_id/items/new'
  # # render form to create a new item
  def new
    # in neo notes (not needed rails/erb thing)
    # what we really need here is the id of the store
    # we would need @item if we are doing error handling
    # @item = @store.items.new
    render component: "NewComment", props: { item: @item }
  end

  # # post 'stores/:store_id/items'
  def create
    #create new comment in memory(not db)
    @comment = @item.comments.new(comment_params)
    if (@comment.save)
      #these two are the same (takes us to topic show page)
      redirect_to [@item, @comment]
      # redirect_to item_comment_path(@item, @comment)
    else
      #TODO ERROR HANDLING
    end
  end

# get 'stores/:store_id/items/:id/edit'
# return form to edit item
  def edit
    render component: "EditComment", props: { item: @item, comment: @comment }
  end

# put/patch 'stores/:store_id/items/:id'
# update item
  def update
    if (@comment.update(comment_params))
      redirect_to [@item, @comment]
    else
      #TODO ERROR HANDLING
    end
  end

  # DELETE	/stores/:store_id/items/:id
  # delete a single item
  def destroy
    @comment.destroy
    redirect_to item_comments_path(@item)
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :author)
  end

  def set_item
    @item = Item.find(params[:item_id])
  end

  def set_comment
    # this way is better, because it is only going to search
    # the given item's comments
    @comment = @item.comments.find(params[:id])
    # also do it this way
    # @item = Item.find(params[:id])
  end

end
