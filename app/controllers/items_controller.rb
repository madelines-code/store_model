class ItemsController < ApplicationController
  before_action :set_store
  before_action :set_item, only: [:show, :update, :destroy, :edit]

  # get 'stores/:store_id/items'
  # return items for a given store
  def index
    render component: "Items", props: { store: @store, items: @store.items }
  end

  # GET	/stores/:store_id/items/:id
  # show a single item
  def show
    render component: "Item", props: { item: @item, store: @store, comments: @item.comments}
  end

  # get '/stores/:store_id/items/new'
  # render form to create a new item
  def new
    # in neo notes (not needed rails/erb thing)
    # what we really need here is the id of the store
    # we would need @item if we are doing error handling
    # @item = @store.items.new
    render component: "NewItem", props: { store: @store }
  end

  # post 'stores/:store_id/items'
  def create
    #create new item in memory(not db)
    @item = @store.items.new(item_params)
    if (@item.save)
      #these two are the same (takes us to topic show page)
      redirect_to [@store, @item]
      # redirect_to store_item_path(@store, @item)
    else
      #TODO ERROR HANDLING
    end
  end

  # get 'stores/:store_id/items/:id/edit'
  # return form to edit item
  def edit
    render component: "EditItem", props: { store: @store, item: @item }
  end

  # put/patch 'stores/:store_id/items/:id'
  # update item
  def update
    if (@item.update(item_params))
      redirect_to [@store, @item]
    else
      #TODO ERROR HANDLING
    end
  end

  # DELETE	/stores/:store_id/items/:id
  # delete a single item
  def destroy
    @item.destroy
    redirect_to store_items_path(@store)
  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :description)
  end

  def set_store
    @store = Store.find(params[:store_id])
  end

  def set_item
    # this way is better, because it is only going to search
    # the given store's items
    @item = @store.items.find(params[:id])
    # also do it this way
    # @item = Item.find(params[:id])
  end
  
end
